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
const { teamSorter } = require('./utils');
router.get('/sortTeams', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sortedTeams = teamSorter(req.query.level1, req.query.level2, req.query.level3, req.query.level4, req.query.level5, req.query.teamCount);
            return res.send(sortedTeams);
        }
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
});
