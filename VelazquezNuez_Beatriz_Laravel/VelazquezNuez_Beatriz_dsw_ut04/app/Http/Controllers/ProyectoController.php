<?php

namespace App\Http\Controllers;

use App\Models\Proyecto;
use Illuminate\Http\Request;

class ProyectoController extends Controller
{
    public function index(){
        $listaProyectos = Proyecto::paginate(10);

        return view('proyectos.index', compact('listaProyectos'));
    }

    public function create(){
        return view('proyectos.create');
    }

    public function store(Request $request){
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
            'categoria' => 'required',
            'precio' => 'required',
            'estado' => 'required',
        ]);

        $proyecto = new Proyecto();
        $proyecto->nombre = $request->nombre;
        $proyecto->descripcion = $request->descripcion;
        $proyecto->categoria = $request->categoria;
        $proyecto->precio = $request->precio;
        $proyecto->estado = $request->estado;
        $res = $proyecto->save();

        return redirect()->route('proyectos.index', compact('res'));
    }

    public function show(Proyecto $proyecto){
        return view('proyectos.show', compact('proyecto'));
    }

    public function edit(Proyecto $proyecto){
        return view('proyectos.edit', compact('proyecto'));
    }

    public function update(Request $request, Proyecto $proyecto){
        $proyecto = Proyecto::find($proyecto->id);
        $proyecto->nombre = $request->nombre;
        $proyecto->descripcion = $request->descripcion;
        $proyecto->categoria = $request->categoria;
        $proyecto->precio = $request->precio;
        $proyecto->estado = $request->estado;
        $proyecto->save();

        return redirect()->route('proyectos.index');
    }

    public function destroy(Proyecto $proyecto){
        $proyecto = Proyecto::find($proyecto->id);
        $proyecto->delete();
        return redirect()->route('proyectos.index');
    }
}