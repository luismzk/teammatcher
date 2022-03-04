var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
export const router = express.Router();
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const levels = [1, 2, 3, 4, 5];
            res.render('landing/homepage', {
                levels
            });
        }
        catch (e) {
            console.log(e);
            res.send("error");
        }
    });
});
