import React, { useEffect, useState } from 'react'
import { formatLocalDate } from 'utils';
import { SalePage } from 'types/sale';

import Pagination from 'components/Pagination';
import api from 'services/api';

export default function DataTable() {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });

    useEffect(() => {
       api.get(`/sales?page=${activePage}&size=20&sort=date,desc`)
       .then(response =>{
           console.log(response.data)
        setPage(response.data);
       })

    }, [activePage])

    const changePage = (index: number) => {
        setActivePage(index);
    }


    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.saller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
