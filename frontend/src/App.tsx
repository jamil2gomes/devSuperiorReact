import BarChats from 'components/BarChats';
import DataTable from 'components/DataTable';
import DonutChat from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';


export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChats />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChat />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}


