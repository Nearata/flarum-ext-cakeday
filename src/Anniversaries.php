<?php

namespace Nearata\CakeDay;

use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;

use Psr\Http\Message\ServerRequestInterface as Request;

class Anniversaries
{
    public function __invoke(Document $document, Request $request)
    {
        if ($request->getAttribute('actor')->isGuest()) {
            throw new RouteNotFoundException();
        }

        return $document;
    }
}
