import React from "react";

export default {
    type: "common-list",
    title: "Conferences",
    icon: "rocket",
    items: [
        {
            title: (<>First international conference on materials, mimicking,<br/> manufacturing from
                and for bio applications</>),
            authority: "Bio M&M",
            authorityMeta: "Speaker",
            authorityWebSite: "https://www.sciencedirect.com/science/article/pii/S2214785318328803",
            rightSide: "2018 Milan",
        },
        {
            title: "BSSM International Conference",
            authority: "BSSM",
            authorityWebSite: "https://www.bssm.org/",
            authorityMeta: "Speaker",
            rightSide: "2017 Sheffield",
        },
        {
            title: "Postgraduate Experimental Mechanics",
            authority: "BSSM",
            authorityWebSite: "https://www.bssm.org/",
            authorityMeta: "Speaker",
            rightSide: "2016 Cambridge",
        },
    ]
};