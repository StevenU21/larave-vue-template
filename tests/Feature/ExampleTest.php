<?php

test('the application returns a successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

test('la vista welcome se renderiza correctamente', function () {
    $response = $this->get('/');
    $response->assertStatus(200);
    $response->assertSee('"component":"Welcome"');
});
