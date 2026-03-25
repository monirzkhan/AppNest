const getInstalledApps = () => {
    const storedAppsSTR = localStorage.getItem('apps');
    return storedAppsSTR ? JSON.parse(storedAppsSTR) : [];
}

const addAppToLS = (id) => {
    const storedApps = getInstalledApps();
    if (storedApps.includes(id))
        return;

    storedApps.push(id);
    localStorage.setItem('apps', JSON.stringify(storedApps))
}

export { getInstalledApps, addAppToLS };