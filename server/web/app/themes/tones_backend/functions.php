<?php

// add user id to session REST query params.
add_filter( 'rest_session_query', function( $args, $request ) {
    $user_id   = $request->get_param( 'user_id' );

    if ( ! empty( $user_id ) ) {
        $args['meta_query'] = array(
            array(
                'key'     => 'user_id',
                'value'   => $user_id,
                'compare' => '=',
            )
        );      
    }

    return $args;
}, 10, 2 );

// Add user ID to jwt auth login response.
function jwt_auth_function($data, $user) {
    $data['user_id'] = $user->data->ID;
    return $data;
};

add_filter('jwt_auth_token_before_dispatch', 'jwt_auth_function', 10, 2);