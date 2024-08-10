const useMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    // fetchData
    useEffect(() => {
        fetchMenue();
    }, []);
    const fetchMenue = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER') + resId;

        const json = await response.json();
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    }
    return resInfo;
}

export default useMenu;