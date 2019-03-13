export const html = `
<div class="container">
    <div class="row">
        <div class="col text text-center">
            <h1>news paper</h1>
        </div>
    </div>
    <div class="row">
        <div class="col"> 
            <nav class="nav justify-content-center">
                    <a class="nav-link" href="#Politics">Politics</a>
                    <a class="nav-link" href="#Tech">Tech</a>
                    <a class="nav-link" href="#Fun and Games">Fun&Games</a>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Large" placeholder="Search what was lost..." aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <button type="button" class="btn btn-outline-primary btn-lg">Search</button>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        
        <div id="Titles" class="col"></div>
        <div id="Content" class="col"></div>
 
    </div>
</div>`;