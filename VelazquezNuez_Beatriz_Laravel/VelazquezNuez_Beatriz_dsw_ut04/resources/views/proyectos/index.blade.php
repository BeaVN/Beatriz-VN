@extends('layouts.plantilla')

@section('title', 'Lista de Proyectos')

@section('content')

    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>

            @foreach ($listaProyectos as $proyecto)
                <tr>
                    <td><a href="{{ route('proyectos.show', $proyecto) }}"> {{ $proyecto->nombre }} </a></td>
                    <td> {{ $proyecto->descripcion }} </td>
                    <td> {{ $proyecto->categoria }} </td>
                    <td> {{ $proyecto->precio }} </td>
                    <td> {{ $proyecto->estado }} </td>
                    <td>
                        <a href="{{ route('proyectos.edit', $proyecto) }}">
                            <button class='btn btn-primary' type='submit'>Editar</button></a>
                    </td>

                    <td>
                        <form action="{{ route('proyectos.destroy', $proyecto) }}" method='POST'>
                            @csrf
                            @method('delete')
                            <button class='btn btn-danger' type='submit'>Eliminar</button>
                        </form>
                    </td>
                </tr>
            @endforeach
            </ul>
        </tbody>
    </table>

    <!-- Para paginar de 15 en 15 registros -->
    {{ $listaProyectos->links() }}

@endsection
