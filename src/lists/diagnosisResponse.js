export default {
    "question": {
        "type": "single",
        "text": "Do you have high cholesterol?",
        "items": [
            {
                "id": "p_10",
                "name": "High cholesterol",
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    },
                    {
                        "id": "unknown",
                        "label": "Don't know"
                    }
                ]
            }
        ],
        "extras": {}
    },
    // "question": {
    //     "type": "group_single",
    //     "text": "How long have you been experiencing episodes of shortness of breath?",
    //     "items": [
    //         {
    //             "id": "s_92",
    //             "name": "It started or got worse within the last hour"
    //         },
    //         {
    //             "id": "s_2176",
    //             "name": "It started or got worse more than 1 hour and less than 24 hours ago"
    //         },
    //         {
    //             "id": "s_90",
    //             "name": "For more than 1 day and less than 4 weeks"
    //         },
    //         {
    //             "id": "s_1625",
    //             "name": "For more than 4 weeks"
    //         }
    //     ],
    //     "extras": {}
    // },
    "conditions": [
        {
            "id": "c_140",
            "name": "Myocardial infarction",
            "common_name": "Heart attack",
            "probability": 0.2658
        },
        {
            "id": "c_50",
            "name": "Hypertension",
            "common_name": "High blood pressure",
            "probability": 0.2212
        },
        {
            "id": "c_136",
            "name": "Pulmonary embolism",
            "common_name": "Pulmonary embolism",
            "probability": 0.1845
        },
        {
            "id": "c_210",
            "name": "Myocarditis",
            "common_name": "Inflammation of heart muscle",
            "probability": 0.0695
        },
        {
            "id": "c_72",
            "name": "Acute bronchitis",
            "common_name": "Acute bronchitis",
            "probability": 0.0644
        }
    ],
    "extras": {},
    "should_stop": false
}