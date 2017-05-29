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
        "Prove business results and unlock the value of your content. I can help you with beautiful custom content, that will build lasting and meaningful relationships with customers."
        False
    , articleView
        "images/topic_2.png"
        "\"Best articulate your brand with the right strategy.\""
        "Best articulate who you are, what you do and most importantly why you do it. With the right strategy you can express your brand genuine personality."
        True
    , articleView
        "images/topic_3.png"
        "\"Bring brand values to your intranet.\""
        "You need an internal communication that engages employees and changes behavior. Help your employees live the brand."
        False
    ]


articleView : String -> String -> String -> Bool -> Html msg
articleView imgUrl heading content reversed =
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
            [ class "h1 m0 red" ]
            [ text heading
            ]
        , p []
            [ text content
            ]
        ]
  in
    div
      [ class "sm-flex py2 sm-py4 items-center" ]
      (if reversed then [ description, image ] else [ image, description ])

