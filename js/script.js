fetch('../data.json')
    .then(response => response.json())
    .then(json =>{
        getData(json);
    })
    // handling error
    .catch(err => console.log(err))

function getData(data){
    let output = '';
    let modalEdit = '';
    let modalDelete = '';
    let modalEditSuccess = '';
    let modalDeleteSuccess = '';

    data.forEach(element => {
        output += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.position}</td>
                        <td>${element.office}</td>
                        <td>${element.age}</td>
                        <td>${element.salary}</td>
                        <td>
                            <a class="mx-3" data-bs-toggle="modal" data-bs-target="#deleteModal${element.id}"><img src="/assets/delete.png" alt="" style="width: 35px;"></a>
                            <a data-bs-toggle="modal" data-bs-target="#editModal${element.id}"><img src="/assets/edit2.png" alt="" style="width: 30px;"></a>
                        </td>
                    </tr>`;

        modalEdit += `<div class="modal fade" id="editModal${element.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p class="modal-title">Edit Data</p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="input-group mb-3 mt-2">
                                        <input type="text" class="form-control" value="${element.name}">
                                    </div>
                                    <div class="input-group mb-3 mt-2">
                                        <input type="text" class="form-control" value="${element.position}">
                                    </div>
                                    <div class="input-group mb-3 mt-2">
                                        <input type="text" class="form-control" value="${element.office}">
                                    </div>
                                    <div class="input-group mb-3 mt-2">
                                        <input type="text" class="form-control" value="${element.age}">
                                    </div>
                                    <div class="input-group mb-3 mt-2">
                                        <input type="text" class="form-control" value="${element.salary}">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editSuccess${element.id}" data-bs-dismiss="modal">EDIT</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

        modalDelete += `<div class="modal fade" id="deleteModal${element.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <p class="modal-title">Delete Data</p>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="content">Are you sure delete <b>${element.name}</b>'s data?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteSuccess${element.id}" data-bs-dismiss="modal">Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        modalEditSuccess += `<div class="modal fade" id="editSuccess${element.id}" data-bs-backdrop="static"     data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-5"></div>
                                        <div class="col-md-4"><img src="/assets/editSuccess.png" class="center"></div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6"><p class="content">Data <b>${element.name}</b> updated!</p></div>
                                        <div class="col-md-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

        modalDeleteSuccess += `<div class="modal fade" id="deleteSuccess${element.id}" data-bs-backdrop="static"     data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-5"></div>
                                        <div class="col-md-4"><img src="/assets/deleteSuccess.png" class="center"></div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6"><p class="content">Data <b>${element.name}</b> deleted!</p></div>
                                        <div class="col-md-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                        
    });
    const bodyTable = document.getElementById('body-table')
    console.log('body table:', bodyTable);
    bodyTable.innerHTML = output
    console.log('print element', data);

    const editModal = document.getElementById('modalEdit')
    editModal.innerHTML = modalEdit

    const deleteModal = document.getElementById('modalDelete')
    deleteModal.innerHTML = modalDelete

    const editSuccessModal = document.getElementById('modalEditSuccess')
    editSuccessModal.innerHTML = modalEditSuccess

    const deleteSuccessModal = document.getElementById('modalDeleteSuccess')
    deleteSuccessModal.innerHTML = modalDeleteSuccess
}

