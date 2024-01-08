<?php

namespace App\Http\Controllers;

use App\Models\AudioFileSpotify;
use App\Models\ListFile;
use Illuminate\Http\Request;

class AudioFileSpotifyController extends Controller
{
    protected $listFile;

    public function __construct(ListFile $listFile)
    {
        $this->listFile = $listFile;
    }

    public function store(Request $request)
    {
        $listFile = $this->listFile->find($request->listFileId);

        $validate = $request->validate(['url' => 'required|url',]);

        $url = str_replace('https://open.spotify.com/', '', $request->url);

        $url = explode('/', $url);

        $data = [
            'type' => $url[0],
            'file' => $url[1]
        ];

        if(count($url) > 2) {
            $newUrl = explode('?', $url[2]);
            $data = [
                'type' => $url[1],
                'file' => $newUrl[0]
            ];
        }

        $listFile->audioFilesSpotify()->create($data);

        return to_route('playlists.edit', $request->listFileId);
    }

    public function destroy(AudioFileSpotify $audioFileSpotify)
    {
        $listFileId = $audioFileSpotify->list_file_id;

        $audioFileSpotify->delete();

        return to_route('playlists.edit', $listFileId);
    }
}
