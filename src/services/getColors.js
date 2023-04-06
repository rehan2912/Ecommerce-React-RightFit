export const getColors = async () => {
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"
    const res = await fetch(
        "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "GET",
        }
    );
    const colors = await res.json();
    return colors
}