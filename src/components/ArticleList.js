import React, { useState, useEffect } from 'react';

import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/colors.css'
import '../styles/responsive.css'

import ArticleSynopsis from './ArticleSynopsis';


function ArticleList() {



    return (

        <section class="section">
            <div className='container'>
                <div className='row' >
                    <div className='col-lg-12'  >
                        <div className="blog-list clearfix">
                            <ArticleSynopsis></ArticleSynopsis>

                            <hr class="invis"></hr>
                            <ArticleSynopsis></ArticleSynopsis>

                            <hr class="invis"></hr>
                            <ArticleSynopsis></ArticleSynopsis>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ArticleList;