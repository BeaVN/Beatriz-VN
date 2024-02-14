@extends('layouts.plantilla')

@section('title', 'Proyecto')

@section('content')

    <h1>Proyecto: {{ $proyecto->nombre }}</h1>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" id="nombre" name="nombre" value="{{ $proyecto->nombre }}" readonly>
        </div>
        <div class="form-group col-md-6">
            <label for="descripcion">Descripción:</label>
            <input type="text" class="form-control" id="descripcion" name="descripcion"
                value="{{ $proyecto->descripcion }}" readonly>
        </div>
        <div class="form-group col-md-6">
            <label for="categoria">Categoría</label>
            <input type="text" class="form-control" id="categoria" name="categoria" value="{{ $proyecto->categoria }}"
                readonly>
        </div>
        <div class="form-group col-md-6">
            <label for="precio">Precio</label>
            <input type="number" class="form-control" id="precio" name="precio" value="{{ $proyecto->precio }}"
                readonly>
        </div>
        <div class="form-group col-md-6">
            <label for="estado">Estado</label>
            <input type="text" class="form-control" id="estado" name="estado" value="{{ $proyecto->estado }}"
                readonly>
        </div>
        <br>
        <a href="{{ route('proyectos.index') }}"> <button type="button" class="btn btn-primary">Volver</button> </a>
    </div>
@endsection
