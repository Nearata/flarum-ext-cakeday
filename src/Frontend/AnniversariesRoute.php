<?php

namespace Nearata\CakeDay\Frontend;

use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface;

class AnniversariesRoute
{
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        if ($actor->isGuest()) {
            throw new RouteNotFoundException();
        }

        $document->title = 'Anniversaries';
    }
}
