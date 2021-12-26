import React from 'react';
import './CoursesArea.css'
import c1Image from '../../images/c1.jpg'
import Lewis from '../../images/lewis.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faStar, faTv } from '@fortawesome/free-solid-svg-icons'


const CoursesArea = ({ courseCategories }) => {
    return (
        <>
            <div className="container">
                <h3 className="text-center pt-5">Find The Right Online Course For You</h3>
                <div className="container row row-cols-1 row-cols-md-3">
                    {
                        courseCategories.map((courseCategory) => (
                            <div class="card-group container mb-2" style={{ width: "16 rem" }}>
                                <div class="card">
                                    <img src={courseCategory.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div className="row d-flex lesson-rating-area pt-1">
                                            <div className="col">
                                                <p className=" lesson-and-rating-area"><FontAwesomeIcon icon={faTv} /> {courseCategory.lessons} Lessons</p>
                                            </div>
                                            <div className="col" id="rating-area">
                                                <p className="lesson-and-rating-area px-1">
                                                    <FontAwesomeIcon className="rating-icon" icon={faStar} /> {courseCategory.rating}({courseCategory.enrolled})
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <h5 class="card-title text-sm"><br /><br />{courseCategory.title}</h5>
                                        <div className="d-flex flex-row bd-highlight">
                                            <div className="p-2 bd-highlight"><img src={Lewis} className=" instructor-image-area" alt="" /></div>
                                            <div className="p-2 bd-highlight"><p>{courseCategory.instructor}</p></div>
                                        </div>
                                        <div class="card-footer d-flex flex-row course-price-area">
                                            <div className="col"><h5 className="text-start"><a href="#" className="">${courseCategory.price}</a></h5></div>
                                            <div className="col"><h5><a className="text-end details-area">Know Details<FontAwesomeIcon className="fa-sm" icon={faArrowRight} /></a></h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default CoursesArea;
// <div className="card-group">
//     <div className="card">
//         <div className="row row-cols-1 row-cols-md-4">
//             <img src={courseCategory.image} className="card-img-top" alt="" />
//             <div className="row lesson-rating-area pt-1">
//                 <div className="col">
//                     <p className="px-2"><FontAwesomeIcon icon={faTv} /> {courseCategory.lessons} Lessons</p>
//                 </div>
//                 <div className="col text-end">
//                     <p className="px-2"><span className="rating-icon">
//                         <FontAwesomeIcon icon={faStar} /></span> {courseCategory.rating}{courseCategory.enrolled}
//                     </p>
//                 </div>
//             </div>
//             <div className="card-body p-1">
//                 <p className="card-title text-md">{courseCategory.title}</p>
//             </div>
//             <div className="d-flex flex-row bd-highlight">
//                 <div className="p-2 bd-highlight"><img src={Lewis} className=" instructor-image-area" alt="" /></div>
//                 <div className="p-2 bd-highlight"><p>{courseCategory.instructor}</p></div>
//             </div>
//             <hr />
//             <div className="row course-price-area">
//                 <div className="col"><h5 className="text-start px-2"><a href="#" className="">${courseCategory.price}</a></h5></div>
//                 <div className="col"><h5><a className="text-end">Know Details <FontAwesomeIcon icon={faArrowRight} /></a></h5></div>
//             </div>
//         </div>
//     </div>
// </div>