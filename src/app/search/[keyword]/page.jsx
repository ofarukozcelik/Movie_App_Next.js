import Movies from '@/components/Movies';
import React from 'react'
import 'dotenv/config'

const page = async ({ params }) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.api_key}`)
    const data = await res.json();

    // console.log(data?.results, "arama sonuç")

    return (
        <div>
            {
                !data?.results ?
                    <div>Aradığınız Film Bulunamadı</div> :
                    <div className='flex items-center flex-wrap gap-3' >
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div>

            }
        </div>
    )
}

export default page