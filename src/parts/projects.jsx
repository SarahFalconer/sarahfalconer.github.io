import React from "react";

export default {
    type: "common-list",
    title: "Projects",
    icon: "tasks",
    items: [
        {
            title: (<>Modelling, Materials, and Methods for Needle Insertion<br/> Investigation in Biomechanics</>),
            rightSide: "2015-2019",
            description: [
                "An investigation into the current literature showed that existing skin tissue surrogates did not perform similarly to real skin tissue in vivo during needle insertions.",
                "A new gel surrogate was developed which fractured in the same way as skin tissue, and it was subject to rigorous mechanical testing to assess its mechanical properties through tension and compression.",
                "The components of the gel surrogate were modified and the mechanical properties were assessed at each concentration until the surrogate matched the published mechanical properties of skin tissue in vivo.\n",
                "The newly developed surrogate was used in a variety of needle insertion experiments, where a robotically controlled needle was inserted into the surrogate.",
                "The force response and needle deflection were recorded for a variety of needle types inserted at different speeds.",
                "The results were compared to results in the literature and it was found that the new surrogate accurately replicates the response of needle insertions through skin tissue better than conventional surrogates.",
                "The needle insertion experiments were recorded using a poleidoscope, which is a novel digital polariscope.",
                "This optical analysis allowed for full-field analysis of each needle insertion, which revealed never-before-seen data on the causes of needle deflection."
            ].join(" ")
        },
        {
            title: "The Integrity of Chocolate Structures",
            rightSide: "2014-2015",
            description: [
                "The fats in chocolate are polymorphic; they can crystallise into six different forms.",
                "This project investigated the mechanical and subjective properties of the various crystalline forms.",
                "Different tempering methods were used to obtain a variety of crystal types.",
                "The elastic moduli of the different crystal types were determined using mechanical tests; such as Charpy impact and three-point bending experiments.",
                "A blind-folded perception test was also completed to assess which concentration of crystal type is more appealing."
            ].join(" ")
        },
        {
            title: "Critical Care Chair",
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