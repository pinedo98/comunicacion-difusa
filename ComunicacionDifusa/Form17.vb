﻿Public Class Form17
    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Form18.Show()
    End Sub

    Private Sub PictureBox1_Click(sender As Object, e As EventArgs) Handles PictureBox1.Click

    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        AxWindowsMediaPlayer1.URL = "Audios/Casa1.wav"
        AxWindowsMediaPlayer1.Visible = False
    End Sub

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
        AxWindowsMediaPlayer1.URL = "Audios/Casa2.wav"
        AxWindowsMediaPlayer1.Visible = False
    End Sub

    Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
        AxWindowsMediaPlayer1.URL = "Audios/Caza.wav"
        AxWindowsMediaPlayer1.Visible = False
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Me.Hide()
        Form16.Show()

    End Sub
End Class