import React, { useState, useEffect } from 'react';

import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/colors.css'

import '../styles/responsive.css'

function ArticleSynopsis() {

    return (
        <div className='blog-box row'>
            <div className='col-md-4'>
                <div className="post-media">

                    <a href="single.html" title="">
                        <img src={require('./upload/blog_square_01.jpg')} alt="" className="img-fluid"></img>
                        <div className="hovereffect"></div>
                    </a>
                </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
                <h4><a href="single.html" title="">5 Beautiful buildings you need to visit without dying</a></h4>
                <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                <small><a href="blog-category-01.html" title="">Travel</a></small>
                <small><a href="single.html" title="">21 July, 2017</a></small>
                <small><a href="blog-author.html" title="">by Boby</a></small>
            </div>
        </div>

    );
}

export default ArticleSynopsis;