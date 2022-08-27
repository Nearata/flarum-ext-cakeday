<?php

namespace Nearata\CakeDay\Frontend;

use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Http\RequestUtil;
use Flarum\Locale\Translator;
use Psr\Http\Message\ServerRequestInterface;

class AnniversariesRoute
{
    protected $translator;

    public function __construct(Translator $translator)
    {
        $this->translator = $translator;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        if ($actor->isGuest()) {
            throw new RouteNotFoundException();
        }

        $document->title = $this->translator->get("nearata-cakeday.forum.page.title");
    }
}
