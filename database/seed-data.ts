
interface SeedData {
    entries:SeedEntry[];
}

interface SeedEntry {
    description:string;
    status:string;
    createdAt: number;
}

export const seedData:SeedData ={

    entries:[
        {

            description:'pending Proident una',
            status:'pending',
            createdAt: Date.now(),
        },
        {

            description:'in-progress Proident dos',
            status:'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {

            description:'finished Proident tres',
            status:'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}