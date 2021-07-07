import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Here's to alcohol, the rose coloured glasses of life"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"In every walk with nature,one receives far more than he seeks"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"You can't understand a city without using its public transport"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Beer makes you feel the way you ought to feel without beer"
            }  
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" /> 
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
