const querySearch = document.location.search 
const id = new URLSearchParams(querySearch).get("_id")

const divDetalles = document.getElementById("tarjetaDetails")

dataReturn()

async function fetchData() {
   data = await fetch('/assets/js/data.json')
      .then(resp => resp.json())
      .then(allData => {
          return allData;
      });
  return data;
};

async function dataReturn() {
    let data = await fetchData();
    const detalles = data.events.find(evento => evento._id == id)
   

    divDetalles.innerHTML = `<div class="card mb-3 border-danger">
    <div class="row g-0">
    <div class="col-md-4 imageDetails">
        <img src="${detalles.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title p-3"><i>${detalles.name}</i></h5>
        <p class="card-text"><i class="text-danger">Category: </i>${detalles.category}</p>
        <p class="card-text"><i class="text-danger">Description: </i>${detalles.description}</p>
        <p class="card-text"><i class="text-danger">Place: </i>${detalles.place}</p>
        <p class="card-text"><i class="text-danger">Capacity: </i>${detalles.capacity}</p>
        <p class="card-text"><i class="text-danger">Assistance: </i>${detalles.assistance || detalles.estimate}</p>
        <p class="card-text"><i class="text-success">Price: </i>${detalles.price}</p>
        </div>
    </div>
    </div>
</div>

<i></i>
`};
