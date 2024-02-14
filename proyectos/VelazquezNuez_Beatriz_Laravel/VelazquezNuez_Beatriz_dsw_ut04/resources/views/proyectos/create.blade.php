@extends('layouts.plantilla')

@section('title', 'Crear un Proyecto Nuevo')

@section('content')
    <form action='{{ route('proyectos.store') }}' method='POST'>
        @csrf
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" name="nombre" value="">

                <!-- mensajes de error con plantillas BLADE -->
                @error('nombre')
                    <small class="text-danger">{{ $message }} </small>
                @enderror
            </div>

            <div class="form-group col-md-6">
                <label for="descripcion">Descripcion:</label>
                <input type="text" class="form-control" id="descripcion" name="descripcion" value="">

                @error('descripcion')
                    <small class="text-danger">{{ $message }} </small>
                @enderror
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
                @error('categoria')
                    <small class="text-danger">{{ $message }} </small>
                @enderror
            </div>

            <div class="form-group col-md-6">
                <label for="precio">Precio:</label>
                <input type="number" step="0.01" class="form-control" id="precio" name="precio" value="">

                @error('precio')
                    <small class="text-danger">{{ $message }} </small>
                @enderror
            </div>

            <div class="form-group col-md-6">
                <label for="estado">Estado:</label>
                <select class="form-control" id="estado" name="estado">
                    <option value="Terminado">Terminado</option>
                    <option value="En Pausa">En Pausa</option>
                    <option value="En desarrollo">En desarrollo</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
                @error('estado')
                    <small class="text-danger">{{ $message }} </small>
                @enderror
            </div>

            <br>
            <button type="submit" class="btn btn-primary">Crear</button>
            <a href="{{ route('proyectos.index') }}">
                <button type="button" class="btn btn-primary">Volver</button>
            </a>
        </div>
    </form>

@endsection
