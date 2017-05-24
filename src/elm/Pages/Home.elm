module Pages.Home exposing
  ( view
  )


import Html exposing (..)
import Html.Attributes exposing (..)

import Views.Root


view : Html msg
view =
  Views.Root.view contentView



contentView : Html msg
contentView =
  div []
    [ articleView
        "images/topic_1.png"
        "\"Create engaging content and tell your unic story.\""
        False
    , articleView
        "images/topic_2.png"
        "\"Best articulate your brand with the right strategy.\""
        True
    , articleView
        "images/topic_3.png"
        "\"Bring brand values to your intranet.\""
        False
    ]


articleView : String -> String -> Bool -> Html msg
articleView imgUrl txt reversed =
  let
    image =
      div
        [ class "sm-col sm-col-6" ]
        [ img
            [ class "block fit"
            , src imgUrl
            ]
            []
        ]

    description =
      div
        [ class "sm-col sm-col-6 px2 sm-px4" ]
        [ h2
            [ class "h1 m0" ]
            [ text txt
            ]
        , p []
            [ text "Vivamus sed leo et lorem dapibus finibus sit amet a odio. Etiam ac molestie magna."
            ]
        ]
  in
    div
      [ class "sm-flex py2 sm-py4 items-center" ]
      (if reversed then [ description, image ] else [ image, description ])

