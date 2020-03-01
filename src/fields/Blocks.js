export const LocationFormBlock = {
    label: 'Location',
    key: 'location-block',
    defaultItem: {
        city: '', lat: 46.2382, lon: -63.1311, zoom: 12
    },
    fields: [
        { name: 'city', label: 'City', component: 'text' },
        { name: 'lat', label: 'Latitude', component: 'number' },
        { name: 'lon', label: 'Longitude', component: 'number' },
        { name: 'zoom', label: 'Zoom Level', component: 'number' }
        ],
    itemProps: item => ({
        label: item.city,
    }),
}

export const CTAFormBlock = {
    label: 'Call To Action',
    key: 'cta-block',
    defaultItem: {
        headline: '', buttonText: ''
    },
    fields: [
        { name: 'headline', label: 'Headline', component: 'text' },
        { name: 'buttonText', label: 'Button Text', component: 'text' }
    ],
    itemProps: item => ({
        label: item.headline,
    }),
}