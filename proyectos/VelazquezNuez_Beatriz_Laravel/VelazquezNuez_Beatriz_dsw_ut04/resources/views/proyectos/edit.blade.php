@extends('layouts.plantilla')

@section('title', "Editar el Proyecto {{ $proyecto->nombre }}")

@section('content')
    <h1>Editar Proyecto: {{ $proyecto->nombre }} </h1>
    <form action="{{ route('proyectos.update', $proyecto->id) }}" method='POST'>
        @csrf
        @method('PUT')

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" name="nombre" value="{{ $proyecto->nombre }}">
            </div>
            <div class="form-group col-md-6">
                <label for="descripcion">Descripción:</label>
                <input type="text" class="form-control" id="descripcion" name="descripcion"
                    value="{{ $proyecto->descripcion }}">
            </div>
            <div class="form-group col-md-6">
                <label for="categoria">Categoría:</label>
                <select class="form-control" id="categoria" name="categoria">
                    <option value="Desarrollo de Aplicaciones">Desarrollo de Aplicaciones</option>
                    <option value="Equipamiento">Equipamiento</option>
                    <option value="Mejora">Mejora</option>
                    <option value="Ampliación">Ampliación</option>
                    <option value="Reposición">Reposición</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="precio">Precio:</label>
                <input type="text" class="form-control" id="precio" name="precio" value="{{ $proyecto->precio }}">
            </div>
            <div class="form-group col-md-6">
                <label for="estado">Estado:</label>
                <select class="form-control" id="estado" name="estado">
                    <option value="Terminado">Terminado</option>
                    <option value="En Pausa">En Pausa</option>
                    <option value="En desarrollo">En desarrollo</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <br>
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <a href="{{ route('proyectos.index') }}"><button type="button" class="btn btn-primary">Volver</button> </a>
        </div>
    </form>
@endsection
