<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }
    public function store()
    {
        $this->validate(request(),[
            'name' => 'required',
            'description' => 'required'
        ]);

    Project::forceCreate([ //we ignore fillable property in the model
        'name' => request('name'),
        'description' => request('description')

    ]);
    return['message' => 'Project Created!'];
    }
}
