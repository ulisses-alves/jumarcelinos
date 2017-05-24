module Views.Root exposing
  ( view
  )


import Html exposing (..)
import Html.Attributes exposing (..)



view : Html msg -> Html msg
view content =
  div
    [ class "bg-silver" ]
    [ div
        [ class "clearfix max-width-4 mx-auto" ]
        [ headerView
        , main_ []
            [ content
            ]
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



footerView : Html msg
footerView =
  let
    email =
      "jumarcelinos@gmail.com"
  in
    footer
      [ class "flex items-center justify-around py2 sm-py4 my2 sm-my4 border-top border-gray" ]
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
