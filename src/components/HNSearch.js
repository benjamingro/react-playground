import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
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


    const hnSearch = (searchTerm=searchTerm, page=0) => {

        setSearchTerm(searchTerm);
        const search_url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`;
        // alert(search_url);
        axios.get(search_url).then(response => {
            // alert(JSON.stringify(response.data.hits));
            setHits(response.data.hits);
            setNbHits(response.data.nbHits);
            setPage(response.data.page);
            setNbPages(response.data.nbPages);
            setHitsPerPage(response.data.hitsPerPage);
        }).catch(error => {
            alert(JSON.stringify(error));
        });

    };

    return (
        <div className="hnStyles">
            <HNSearchForm hnSearch={hnSearch} />
            <HNHitList hitList={hits} />
            {nbPages > 1 && <HNPageControl page={page} nbPages={nbPages} setPage={setPage} hnSearch={hnSearch} /> }
        </div>
    )
}

function HNHitList({ hitList }) {
    return (
        <>
            <div className="card" style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                <div className="card-body p-0">
                    <ListGroup >
                        {hitList.map((value, index) => {
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



function HNSearchForm({ hnSearch }) {

    const schema = yup.object().shape({
        searchTerm: yup.string().required('required')
    });



    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ searchTerm: '' }}
                onSubmit={values => {

                    hnSearch(values.searchTerm);
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

function HNPageControl({ page, nbPages, setPage, hnSearch }) {
    return (
        <>
            <div className="row w-100 mt-3">
                <div className="col-lg-2">
                    
                </div>
                <div className="col-lg-1">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </Button>
                </div>
                <div className="col-lg-1">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>
                </div>
                <div className="col-lg-2 d-flex justify-content-end text-secondary pt-1">
                    Page
                </div>
                <div className="col-lg-1">
                    <HNPageForm hnSearch={hnSearch} page={page} setPage={setPage} nbPages={nbPages}/> 
                </div>
                <div className="col-lg-2 text-secondary pt-1">
                    of {nbPages}
                </div>
                
                <div className="col-lg-1">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                </div>
                <div className="col-lg-1">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
                </div>

            </div>
        </>
    )
}

function HNPageForm({ hnSearch,page,setPage,nbPages }) {

    const schema = yup.object().shape({
        page: yup.number().typeError('must be a number')
        .required('required')
        .positive('must be positive')
        .integer('must be an integer')
        .max(Number(nbPages),`must not exceed ${nbPages}`)
    });



    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ page: page+1 }}
                onSubmit={values => {
                    const decremented_page = Number(values.page) - 1; 
                    alert(`decremented_page = ${decremented_page}`);
                    setPage(decremented_page );
                    hnSearch(null,null,decremented_page);
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched, onSubmit }) => (
                    <Form >
                        
                        <div className="row w-100">
                            <div className="col">
                                <InputGroup className="">
                                    <Field name="page" style={{maxWidth:'40px'}} />
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