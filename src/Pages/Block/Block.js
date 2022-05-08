import React from 'react';
import { Card } from 'react-bootstrap';

const Block = () => {
    return (
        <div className='mx-5 grid gap-3'>
            <section>
                <Card>
                    <Card.Img variant="top" src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" />
                    <Card.Body>
                        <Card.Title>Difference between javascript and nodejs????</Card.Title>
                        <ul className='pl-0'>
                            <li>1) Javascript is a programming language that is used for writing scripts on a website. Other wise, NodeJS is a Javascript runtime environment. </li>
                            <li>2) Javascript can only be run in the browsers. Other hand, We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>3) It is basically used on the client-side. Other wise, It is mostly used on the server-side. </li>
                            <li>4) Javascript is capable enough to add HTML and play with the DOM.  And, Nodejs does not have capability to add HTML tags. </li>
                            <li>1) 	Javascript is used in frontend development. But, Nodejs is used in server-side development.</li>
                        </ul>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_NodeJS_Driver-0qkvda7kk0.png" />
                    <Card.Body>
                        <Card.Title>When should you use nodejs and when should you use mongodb????</Card.Title>
                        <div>
                            <h3>When should you use nodejs :</h3>
                            Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional websites and back-end API services. <br />
                            1) It runs Javascript, so you can use the same language on server and client, and even share some code between them.
                            <br />
                            2) The single-threaded event-driven system is fast even when handling lots of requests at once, and also simple, compared to traditional multi-threaded Java or ROR frameworks.
                            <br />
                            3) The ever-growing pool of packages accessible through NPM, including client and server-side libraries/modules, as well as command-line tools for web development. Most of these are conveniently hosted on Github, where sometimes you can report an issue and find it fixed within hours! It's nice to have everything under one roof, with standardized issue reporting and easy forking.
                            <br />
                            4) It has become the defacto standard environment in which to run Javascript-related tools and other web-related tools, including task runners, minifies, beautifiers, linters, preprocessors, bundlers, and analytics processors.
                            <br />
                            5) It seems quite suitable for prototyping, agile development, and rapid product iteration.
                        </div>
                        <div>
                            <h3>When should you use mongodb : </h3>
                            <p>
                                MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data.
                                <br />
                                SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                                Document databases are highly flexible, allowing variations in the structure of documents and storing documents that are partially complete. One document can have others embedded in it. Fields in a document play the role of columns in a SQL database, and like columns, they can be indexed to increase search performance.
                                <br />
                                As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.
                                MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons.                            MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data.
                                <br />
                                SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                                <br />
                                As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.
                                MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </section>
            <section>
                <Card>
                    <Card.Img variant="top" src="https://miro.medium.com/max/1012/1*yYKwVI81AiZA78NJySgRYQ.png" />
                    <Card.Body>
                        <Card.Title>Differences between sql and nosql databases????</Card.Title>
                        <ul className='pl-0'>
                            <li>1) <span className='font-semibold'>Data Storage Model :</span> In SQL
                                Tables with fixed rows and columns Other wise, In NO-SQL,Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges
                            </li>
                            <li>2) <span className='font-semibold'>Schemas :</span> SQL is Rigid. and No-SQL is  
                                Flexible.
                            </li>
                            <li>3) <span className='font-semibold'>Scaling :</span> SQL is Vertical (scale-up with a larger server) and No-SQL is Horizontal (scale-out across commodity servers).
                            </li>
                            <li>4) <span className='font-semibold'>Multi-Record ACID Transactions :</span> SQL is supported and No-SQL is most do not support multi-record ACID transactions. However, some—like MongoDB—do.  </li>
                            <li>5) <span className='font-semibold'>Examples :</span> SQL : Oracle, MySQL, Microsoft SQL Server, and PostgreSQL And No-SQL : Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</li>
                        </ul>
                    </Card.Body>
                </Card>
            </section>
        </div>
    );
};

export default Block;