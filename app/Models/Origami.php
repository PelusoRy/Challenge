<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Origami extends Model
{
    /** @use HasFactory<\Database\Factories\OrigamiFactory> */
    protected $fillable = ['nombre','descripcion','nivel_de_dicultad'];
    use HasFactory;
}
