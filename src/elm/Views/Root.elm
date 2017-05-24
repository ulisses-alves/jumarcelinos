module Views.Root exposing
  ( view
  )


import Html exposing (..)
import Html.Attributes exposing (..)



view : Html msg
view =
  div
    [ class "bg-silver" ]
    [ div
        [ class "clearfix max-width-4 mx-auto" ]
        [ headerView
        , mainView
        , footerView
        ]
    ]


headerView : Html msg
headerView =
  header
    [ class "mb2 sm-mb4" ]
    [ h1
        [ class "mb2 sm-mb4" ]
        [ text "Juliana Marcelino"
        ]
    , div
        [ ]
        [ img
            [ class "fit"
            , src "images/header.png"
            , alt "Have you told your story today?"
            ]
            []
        ]
    ]


mainView : Html msg
mainView =
  main_ []
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


footerView : Html msg
footerView =
  let
    email =
      "jumarcelinos@gmail.com"
  in
    footer
      [ class "flex items-center justify-around py2 sm-py4 my2 sm-my4 border-top border-silver" ]
      [ div
          [ class "sm-col sm-col-8" ]
          [ text ""
          ]
      , div
          [ class "sm-col sm-col-4" ]
          [ a
              [ href <| "mailto:" ++ email
              ]
              [ text email
              ]
          , span
              [ class "h2 block" ]
              [ text "Juliana Marcelino da Silva"
              ]
          ]
      ]
