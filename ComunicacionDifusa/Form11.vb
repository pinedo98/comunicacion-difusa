﻿Public Class Form11
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Me.Hide()
        Form1.Show()
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Form12.Show()

    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        'My.Computer.Audio.Play("C:\Users\user\Documents\TALL DE INV\Comunicacion Difusa\AMBIGUEDAD\homografas\Pesa1.wav", AudioPlayMode.Background)
        AxWindowsMediaPlayer1.URL = "Audios/Pesa1.wav"
        AxWindowsMediaPlayer1.Visible = False
    End Sub

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
        'My.Computer.Audio.Play("C:\Users\user\Documents\TALL DE INV\Comunicacion Difusa\AMBIGUEDAD\homografas\Pesa2.wav", AudioPlayMode.Background)
        AxWindowsMediaPlayer1.URL = "Audios/Pesa2.wav"
        AxWindowsMediaPlayer1.Visible = False
    End Sub
End Class