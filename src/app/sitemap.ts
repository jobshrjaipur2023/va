import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jobshrabroad.com'

    // Core pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/jobs`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/visa`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/success-stories`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    // Job category pages (for future expansion)
    const jobCategories = [
        'construction',
        'hospitality',
        'driving',
        'technical',
        'manufacturing',
        'healthcare',
    ]

    const categoryPages = jobCategories.map((category) => ({
        url: `${baseUrl}/jobs?category=${category}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    // Country-specific job pages
    const countries = [
        'uae',
        'saudi-arabia',
        'qatar',
        'uk',
        'canada',
        'germany',
        'russia',
        'mauritius',
    ]

    const countryPages = countries.map((country) => ({
        url: `${baseUrl}/jobs?country=${country}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    return [...staticPages, ...categoryPages, ...countryPages]
}
