import Trending from '../../components/trending'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

function TrendingPage({searchParams}: {searchParams: {page: string | "undefined"}}){    
    let page: string
    if (searchParams.page === undefined || isNaN(parseInt(searchParams.page))|| searchParams.page=='0'){
         page = '0';
    }else{
         page = searchParams.page;
    }
    const previousPage = parseInt(page) - 1;
    const nextPage=parseInt(page)+1;

    

    return(
        <>
            <h1  className="text-6xl font-bold px-10">Trending </h1>
            <h2 className="text-4xl font-bold px-10 ">Movies</h2>
            <Trending {...searchParams} />
            <Pagination>
                <PaginationContent>
                    {page!=='0' &&(
                        <PaginationItem>
                            <PaginationPrevious href={`/trending?page=${previousPage}`}/> 
                        </PaginationItem>
                        )
                    }
                    <PaginationItem>
                        <PaginationLink href="#" isActive>{page}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={`/trending?page=${nextPage}`}  />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    ); 
}
export default TrendingPage;