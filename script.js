const API_URL = "https://62ab6beda62365888bdc2f11.mockapi.io/Hw13";

async function getResFromServer(url) {
  const dataUrl = await fetch(url);
  const data = await dataUrl.json();
  return data;
}
getResFromServer(API_URL)
  .then(async (data) => {
    const projectId1 = await data.filter((item) => {
      return item.ProjectId === 1;
    });
    const projectId10093 = await data.filter((item) => {
      return item.ProjectId === 10093;
    });
    const projectId10094 = await data.filter((item) => {
      return item.ProjectId === 10094;
    });
    const oneSorted = await projectId1.sort((oneItem, twoItem) => {
      return oneItem.SiteId - twoItem.SiteId;
    });
    const twoSorted = await projectId10093.sort((oneItem, twoItem) => {
      return oneItem.SiteId - twoItem.SiteId;
    });
    const threeSorted = await projectId10094.sort((oneItem, twoItem) => {
      return oneItem.SiteId - twoItem.SiteId;
    });
    return { oneSorted, twoSorted, threeSorted };
  })
  .then(({ oneSorted, twoSorted, threeSorted }) => {
    setTimeout(() => {
      for (let i = 0; i <= oneSorted.length; i++) {

        const TableData = document.createElement("td");
        const siteTr = document.querySelector("#siteTr");
        TableData.innerHTML = oneSorted[i].SiteId;
        siteTr.appendChild(TableData);
      }
    }, 1000);

    setTimeout(() => {
      for (let i = 0; i <= oneSorted.length; i++) {
        const TableData = document.createElement("td");
        const trProject1 = document.querySelector("#trProject1");
        TableData.innerHTML = oneSorted[i].Target;
        trProject1.appendChild(TableData);
      }
    }, 1000);
    setTimeout(() => {
      for (let i = 0; i <= twoSorted.length; i++) {
        const TableData = document.createElement("td");
        const trProject1 = document.querySelector("#trProject3");
        TableData.innerHTML = twoSorted[i].Target;
        trProject1.appendChild(TableData);
      }
    }, 1000);
    setTimeout(() => {
      for (let i = 0; i <= threeSorted.length; i++) {
        const TableData = document.createElement("td");
        const trProject1 = document.querySelector("#trProject4");
        TableData.innerHTML = threeSorted[i].Target;
        trProject1.appendChild(TableData);
      }
    }, 1000);
  });

