import React, {useState} from "react";
import { CarsListComponent } from "../../components/Cars/CarsList";
import { Pagination } from '../../components/Cars/Pagination'
import { connect } from "react-redux";
import { deleteCar } from "../../store/actions/cars";
import { removeFromLocalStorageById } from "../../utils/storage";

export const HomeViewComponent = ({ data, dispatch }) => {
  const handleDelete = id => {
    dispatch(deleteCar(id));
    removeFromLocalStorageById(id);
  };

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(6)

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <>
      <CarsListComponent 
        data={currentCards} 
        onDelete={handleDelete} 
      />
      <Pagination 
        cardsPerPage={cardsPerPage} 
        totalCards={data.length} 
        paginate={paginate}
      />
    </>
  );
};

export const HomeView = connect(state => ({ ...state }))(HomeViewComponent);
