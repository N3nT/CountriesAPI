import Dropdown from "./Dropwdown";

const Search = (props) => {
    
    const handleSearchBarChange = (e) => {
        props.setSearchBar(e.target.value);
    }
   
    return(
        <div className="flex flex-col items-start py-5 px-10 md:px-20 md:flex-row md:items-center md:justify-between w-full">
            <input className="my-10 bg-white dark:bg-darkModeEl dark:text-white w-full md-w-2 py-3 px-5 shadow-md rounded-sm text-lightModeInput max-w-2xl md:justify-between" type="text" placeholder="Search for a country..." value={props.searchBar} onChange={handleSearchBarChange}/>
            <Dropdown setRegionSelect={props.setRegionSelect}/>
        </div>
    )
}

export default Search;