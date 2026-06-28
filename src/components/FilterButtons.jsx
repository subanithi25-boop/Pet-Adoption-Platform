function FilterButtons({ filter, setFilter }) {
return (
<div className="filter-buttons">

  <button  
    className={filter === "all" ? "active-filter" : ""}  
    onClick={() => setFilter("all")}  
  >  
    All  
  </button>  

  <button  
    className={filter === "dog" ? "active-filter" : ""}  
    onClick={() => setFilter("dog")}  
  >  
    Dogs 🐶  
  </button>  

  <button  
    className={filter === "cat" ? "active-filter" : ""}  
    onClick={() => setFilter("cat")}  
  >  
    Cats 🐱  
  </button>  

  <button  
    className={filter === "male" ? "active-filter" : ""}  
    onClick={() => setFilter("male")}  
  >  
    Male ♂  
  </button>  

  <button  
    className={filter === "female" ? "active-filter" : ""}  
    onClick={() => setFilter("female")}  
  >  
    Female ♀  
  </button>  

</div>  

);
}

export default FilterButtons;