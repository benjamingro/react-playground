import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import '../css/HNSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios').default;




function HNSearch() {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [hits, setHits] = React.useState([]);
    const [nbHits, setNbHits] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [nbPages, setNbPages] = React.useState(0);
    const [hitsPerPage, setHitsPerPage] = React.useState(0);

    function handleSetPage(newValue) {
        setPage(newValue);
    }

    function handleSetSearchTerm(newValue){
        // setPage(newValue); 
        setSearchTerm(newValue); 
    }

    React.useEffect(()=>{
        function hnSearch() {

            const search_url = `https://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`;
    
            // alert(`inside hnSearch
            //         search_url = ${search_url}
            //         searchTerm = ${searchTerm}
            //         page = ${page}
            //         `);
    
            axios.get(search_url).then(response => {
                setHits(response.data.hits);
                setNbHits(response.data.nbHits);
                setPage(response.data.page);
                setNbPages(response.data.nbPages);
                setHitsPerPage(response.data.hitsPerPage);
            }).catch(error => {
                alert(JSON.stringify(error));
            });
    
        };

        hnSearch();
    },[page,searchTerm]);


    return (
        <div className="hnStyles">
            <HNSearchForm handleSetSearchTerm={handleSetSearchTerm} />
            <HNHitList hitList={hits} />
            {nbPages > 1 && <HNPageControl page={page} nbPages={nbPages} handleSetPage={handleSetPage} />}
        </div>
    )
}

function HNHitList({ hitList }) {

    const filtered_hitList = hitList.filter(value=>
        (value.url!=''&&value.url!=null)||(value.story_url!=''&&value.story_url!=null)
    ); 

    const filtered_hitList_2 = filtered_hitList.map((value,index)=>{
        if(value.url==''||value.url==null)
            value.url = value.story_url; 
        if(value.title==''||value.title==null)
            value.title=value.story_title; 
        return value; 
    });


    return (
        <>
            <div className="card" style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                <div className="card-body p-0">
                    <ListGroup >
                        {filtered_hitList_2.map((value, index) => {
                            // if(value.url==='')
                            //     value.url = value.story_url; 
                            // if(value.title==='')
                            //     value.title=value.story_title;
                            return (

                                <ListGroup.Item key={index} id={'item_id_' + index}
                                    onClick={() => {
                                        document.getElementById('id_' + index).click();

                                    }}

                                    onMouseOver={() => {
                                        document.getElementById('item_id_' + index).classList.add('bg-light');
                                    }}

                                    onMouseLeave={() => {
                                        document.getElementById('item_id_' + index).classList.remove('bg-light');
                                    }}

                                >
                                    <a href={value.url} target="_blank" id={'id_' + index}>{value.title}</a>
                                </ListGroup.Item>
                            )
                        })
                        }

                    </ListGroup>

                </div>
            </div>

        </>
    )
}

function HNSearchForm({ handleSetSearchTerm }) {

    const schema = yup.object().shape({
        searchTerm: yup.string().required('required')
    });



    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ searchTerm: '' }}
                onSubmit={values => {
                    handleSetSearchTerm(values.searchTerm);
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched }) => (
                    <Form>
                        {/* <Form.Label>Search term</Form.Label> */}
                        <div className="row w-100">
                            <div className="col text-secondary">
                                Search term
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-lg-6">
                                <InputGroup className="">
                                    <Field name="searchTerm" />
                                </InputGroup>
                            </div>
                            <div className="col-lg-6">
                                <ButtonGroup style={{ minWidth: '210px' }}>
                                    <Button variant="primary" type="submit">Search</Button>
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className="row w-100 mb-2">
                            {errors.searchTerm && touched.searchTerm ? (

                                <div className="col text-danger ">{errors.searchTerm}</div>

                            ) : <div className="col">&nbsp;</div>}
                        </div>


                    </Form>
                )}

            </Formik>
        </>
    )
}


function HNPageControl({ page, nbPages, handleSetPage }) {
    const firstPage = ()=>{
        handleSetPage(0);
    };

    const previousPage = ()=>{
        handleSetPage(page-1);  
    }; 

    const nextPage = () =>{
        handleSetPage(page+1); 
    };

    const lastPage = () =>{
        handleSetPage(nbPages-1); 
    };

    

    return (
        <>
            <div className="row w-100 mt-3">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-1">
                    <Button variant="secondary" className={page===0?'disabled':''} onClick={firstPage} >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </Button>
                </div>
                <div className="col-lg-1">
                    <Button variant="secondary" className={page===0?'disabled':''} onClick={previousPage}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                </div>
                <div className="col-lg-2 d-flex justify-content-end text-secondary pt-1">
                    Page
                </div>
                <div className="col-lg-1">
                    <HNPageForm page={page} handleSetPage={handleSetPage} nbPages={nbPages} />
                </div>
                <div className="col-lg-2 text-secondary pt-1">
                    of {nbPages}
                </div>

                <div className="col-lg-1">
                    <Button variant="secondary" className={page===nbPages-1?'disabled':''} onClick={nextPage}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </div>
                <div className="col-lg-1">
                    <Button variant="secondary" className={page===nbPages-1?'disabled':''} onClick={lastPage}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
                </div>

            </div>
        </>
    )
}

function HNPageForm({ page, handleSetPage, nbPages }) {

    const schema = yup.object().shape({
        page: yup.number().typeError('must be a number')
            .required('required')
            .positive('must be positive')
            .integer('must be an integer')
            .max(Number(nbPages), `must not exceed ${nbPages}`)
    });



    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ page: page + 1 }}
                onSubmit={values => {
                    const decremented_page = Number(values.page) - 1;
                    handleSetPage(Number(decremented_page));
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched, onSubmit }) => (
                    <Form >

                        <div className="row w-100">
                            <div className="col">
                                <InputGroup className="">
                                    <Field name="page" style={{ maxWidth: '40px' }} />
                                </InputGroup>
                            </div>

                        </div>

                        <div className="">
                            {errors.page && touched.page ? (

                                <div className="text-danger ">{errors.page}</div>

                            ) : <div className="">&nbsp;</div>}
                        </div>


                    </Form>
                )}

            </Formik>
        </>
    )
}

export default HNSearch