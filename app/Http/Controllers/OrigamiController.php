<?php

namespace App\Http\Controllers;

use OpenAI;
use App\Http\Requests\GenerateImageRequest;
use App\Models\Origami;
use App\Http\Requests\StoreOrigamiRequest;
use App\Http\Requests\UpdateOrigamiRequest;
use App\Http\Resources\OrigamiResource;
use Illuminate\Http\Client\Request;
use Inertia\Inertia;

class OrigamiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Origami::query();

        if (request("nombre")) {
            $query->where("nombre","like","%". request("nombre") . "%");
        }

        $origamis = $query->paginate(10);

        return inertia("Origami/Index",[
            "origamis" => OrigamiResource::collection($origamis),
            "queryParam" => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Origami/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrigamiRequest $request)
    {
        $data = $request->validationData();
        $origami = Origami::create($data);

        return to_route('origami.show', $origami);
    }

    /**
     * Display the specified resource.
     */
    public function show(Origami $origami)
    {
        return inertia('Origami/Show',[
            'origami' => new OrigamiResource($origami),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Origami $origami)
    {
        return inertia('Origami/Edit',[
            'origami' => new OrigamiResource($origami),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrigamiRequest $request, Origami $origami)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Origami $origami)
    {
        $origami->delete();
        return to_route('origami.index');
    }

    public function generate_image(GenerateImageRequest $request, Origami $origami)
    {
        $data = $request->validationData();

        $client = OpenAI::client(env('OPEN_AI_KEY'));


        if($data['imagen'] ){
            $origami->imagen = $data['imagen'];
            $origami->update();

            return to_route('origami.show', $origami);
        }
        // dd($data['promt']);
        $promt = $data['promt'];

        $response = $client->images()->create([
            'model' => "dall-e-3",
            'prompt' => $promt,
            'n' => 1,
            'size' => "1024x1024",
            'response_format' => 'url',
        ]);
        
        $url = $response->toArray()['data'][0]['url'];

        $origami->imagen = $url;
        
        $origami->update();

        return to_route('origami.show', $origami);
    }
}
