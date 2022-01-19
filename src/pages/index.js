/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

const topics = [
    {
        title: <>Core Java Interview Questions</>,
        link: 'docs/core-java-interview-questions/start'
    },
    {
        title: <>Spring Interview Questions</>,
        link: 'docs/spring-interview-questions/start'
    },
    {
        title: <>Kafka Interview Questions</>,
        link: 'docs/kafka-interview-questions/start'
    },
    {
        title: <>ReactJs Interview Question</>,
        link: 'docs/reactjs-interview-questions/start'
    },
    {
        title: <>Angular Interview Question</>,
        link: 'docs/angular-interview-questions/start'
    },
    {
        title: <>Uml Interview Question</>,
        link: 'docs/uml-interview-questions/start'
    },
    {
        title: <>JPA Interview Question</>,
        link: 'docs/jpa-interview-questions/start'
    },
    {
        title: <>AWS Interview Question</>,
        link: 'docs/aws-interview-questions/start'
    },
    {
        title: <>Azure Interview Question</>,
        link: 'docs/aws-interview-questions/start'
    },
    {
        title: <>Node JS Interview Question</>,
        link: 'docs/nodejs-interview-questions/start'
    },
    {
        title: <>Java Architect Interview Question</>,
        link: 'docs/java-architect-interview-questions/start'
    },
    {
        title: <>Javascript  Interview Question</>,
        link: 'docs/javascript-interview-questions/start'
    },
    {
        title: <>Docker Interview Question</>,
        link: 'docs/docker-interview-questions/start'
    },
    {
        title: <>React Native Interview Question</>,
        link: 'docs/react-native-interview-questions/start'
    },
    {
        title: <>Ionic Interview Question</>,
        link: 'docs/ionic-interview-questions/start'
    },
    {
        title: <>Redis Interview Question</>,
        link: 'docs/redis-interview-questions/start'
    },
    {
        title: <>Elastic Search Interview Question</>,
        link: 'docs/elastic-search-interview-questions/start'
    },
    {
        title: <>Mongo Interview Question</>,
        link: 'docs/mongo-interview-questions/start'
    },
    {
        title: <>Project Management Interview Question</>,
        link: 'docs/project-management-interview-questions/start'
    },
    {
        title: <>HTML Interview Question</>,
        link: 'docs/html-interview-questions/start'
    },
    {
        title: <>Scrum Interview Question</>,
        link: 'docs/scrum-interview-questions/start'
    },
];
const features = [
    {
        title: <>Learn & Grow</>,
        imageUrl: 'img/grow.jpg',
        description: (
            <>
                Learn and grow. This is totally free and we are adding continues resources. Even you can contribute if you thing something is missing.
            </>
        ),
    },
    {
        title: <>Reference Point for Interviewer as well</>,
        imageUrl: 'img/book.jpg',
        description: (
            <>
                This is not only for people to learn and prepare interview, event interviewer can also look at the questions to get prepared. So Get Set And Go and Hire the best.
            </>
        ),
    },
    {
        title: <>Powered by Community</>,
        imageUrl: 'img/community.jpg',
        description: (
            <>
                This is powered by community. Do you want some questions to be included, just raise a pull request. Or even just raise a bug with your question and answer.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Topic({title, link}) {
    const docLink = useBaseUrl(link);
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card square={true} elevation={0} style={{backgroundColor: "dimgrey"}}>
                {docLink && (
                    <div className="text--center">
                        <Link className={styles.featureImage} to={docLink} alt={title}>{title}</Link>
                    </div>
                )}
            </Card>
        </Grid>
    );
}


function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        {/*<Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/topics')}>
                            Get Started
                        </Link>*/}
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <div className='margin-vert--lg'>
                    <div className="container">
                        <Card square={true} elevation={0} className="text--center" header={'Check the Topics'}>
                            <CardHeader style={{backgroundColor: '#cdcdcd'}} title={'Check the Topics'} subheader={'All the best'}>Check the Topics</CardHeader>'
                            <Grid spacing={1} container>
                                {topics && topics.length && (
                                    <>
                                        {topics.map((props, idx) => (
                                            <Topic key={idx} {...props} />
                                        ))}
                                    </>
                                )}
                            </Grid>
                        </Card>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
