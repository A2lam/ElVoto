@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div class="content">
            <form method="POST" action="{{ route('leagues.store') }}">
                @csrf

                <div class="form-group row">
                    <label for="name" class="col-md-6 col-form-label text-md-right">Nom de la ligue</label>

                    <div class="col-md-6">
                        <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                        @if ($errors->has('name'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>


                <div class="form-group row mb-0 justify-content-center">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">
                            Valider
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
