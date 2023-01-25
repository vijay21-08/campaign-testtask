export interface UserData {
    id: string;
    name: string;
    progress: string;
    ctr: number;
    start_date: any;
    actions: string;
}

export interface Action {
    value: string;
    viewValue: string;
}

export interface category {
    value: string;
    viewValue: string;
}
export interface marker {
    latitude: number;
    longitude: number;
    label?: string | undefined;
    draggable: boolean;
    name: string;
    position: number;
    color: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
}


export const DataFromAPI = {
    valid: true,
    data: [
        {
            label: 'DemoGraphic',
            children: [
                {
                    label: 'Age1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'gender1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: '360 Labels1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'Handset1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
            ]
        },
        {
            label: 'GeoGraphic',
            children: [
                {
                    label: 'Age1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'gender1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: '360 Labels1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'Handset1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
            ]
        },
        {
            label: 'Commercial Relevance',
            children: [
                {
                    label: 'Age1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'gender1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: '360 Labels1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
                {
                    label: 'Handset1',
                    children: [
                        {
                            label: '< 20',
                            checked: false,
                        },
                        {
                            label: '20-29',
                            checked: false,
                        },
                        {
                            label: '30-39',
                            checked: false,
                        },
                        {
                            label: '40-49',
                            checked: false,
                        },
                        {
                            label: '50-59',
                            checked: false,
                        }
                    ]
                },
            ]
        }
    ]
}