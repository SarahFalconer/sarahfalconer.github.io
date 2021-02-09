import React from "react";

export default {
    type: "common-list",
    title: "Education",
    icon: "graduation",
    items: [
        {
            title: "Doctor of Philosophy in Mechanical Engineering (Ph.D)",
            authority: "University of Sheffield",
            authorityWebSite: "https://www.sheffield.ac.uk/",
            rightSide: "2015-2020",
            description: ""
        },
        {
            title: "Master's in Mechanical Engineering (M.Eng)",
            authority: "University of Sheffield",
            authorityWebSite: "https://www.sheffield.ac.uk/",
            rightSide: "2011-2015",
            description: ""
        },
        {
            title: "Olchfa School and Sixth Form",
            rightSide: "2004-2011",
            description: (
                <ul>
                    <li>3 A-levels: Maths Mechanics (A*), Physics (B), Graphics Design (A*)</li>
                    <li>A/S level: German (C)</li>
                    <li>11 GCSEs, A* to B</li>
                </ul>
            )
        }
    ]
}