import React from "react";

export default {
    type: "common-list",
    title: "Projects",
    icon: "tasks",
    items: [
        {
            title: (<>Modelling, Materials, and Methods for Needle Insertion<br/> Investigation in Biomechanics</>),
            authorityWebSite: "http://etheses.whiterose.ac.uk/26309/",
            authority: "Ph.D Thesis on White Rose eTheses Online",
            rightSide: "2015-2019",
            description: (
                <>
                    The main aim of my Ph.D was to develop a new tissue surrogate that better replicated the properties
                    of human soft tissue.
                    Research into the current literature showed that existing skin tissue surrogates did not perform
                    similarly to real skin tissue <em>in vivo</em> during needle insertions.<br/>
                    I developed a new gel surrogate which performed the same as skin tissue, and I conducted rigorous
                    mechanical testing to assess its mechanical properties.
                    The newly developed surrogate was used in a variety of needle insertion experiments and results
                    showed that the new surrogate better replicated the response of needle insertions through skin
                    tissue than conventional surrogates.<br/>
                    I used Microsoft Excel and specialised software to capture and process the vast quantities of data
                    produced by my experiments.
                </>
            )
        },
        {
            title: "The Integrity of Chocolate Structures",
            authority: "Master's Degree Thesis",
            rightSide: "2014-2015",
            description: [
                "The fats in chocolate are polymorphic; they can crystallise into six different forms.",
                "In this project I investigated the mechanical and subjective properties of the various crystalline forms.",
                "Different tempering methods were used to obtain a variety of crystal types.",
                "The elastic moduli of the different crystal types were determined using mechanical tests; such as Charpy impact and three-point bending experiments.",
                "A blind-folded perception test was also completed to assess which concentration of crystal type is more appealing."
            ].join(" ")
        },
        {
            title: "Critical Care Chair",
            authority: "Bachelor's Degree Project",
            rightSide: "2014",
            description: [
                "Within a group of six students we designed a new critical care chair in conjunction with Knight Imaging and The John Radcliffe Hospital, Oxford.",
                "Their current chair was overcomplicated and expensive to manufacture.",
                "We were given a number of points to address which were all completed successfully; such as lowering the starting height, and incorporating motorised adjustments and wheels.",
                "The range of motion was increased to include lie-flat position to a near upright position.",
                "All this was included while reducing the number of surfaces and edges to allow for easier cleaning.\n" +
                "After the completion of the project the staff at Knight Imaging requested a presentation for their heads of marketing and manufacturing.",
                "Following this our design was put into development to become a new critical care chair for the company."
            ].join(" ")
        }
    ]
}